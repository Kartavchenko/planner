import { useState, useEffect, Suspense } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Header from "../Components/Header/Header";
import { getEvents, removeStorageItem } from "../localStorage/localStorage";

export interface Obj {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  picture: string | undefined;
  priority: string;
}

interface ContextType {
  events: Obj[] | undefined;
}

export default function MainPage() {
  const [events, setEvents] = useState<Obj[]>([]);

  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("query") || "";

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const filterEvent = (events: Obj[], search: string) => {
    const filterEvent = events.filter(({ title }) => {
      return title.toLowerCase().includes(search.toLowerCase());
    });
    return filterEvent;
  };

  if (pathname === "/") {
    removeStorageItem("edit-event");
  }

  useEffect(() => {
    if (queryValue) {
      return navigate(`/?query=${queryValue}`);
    }
  }, [navigate, queryValue]);

  useEffect(() => {
    (async () => {
      try {
        const fetchEvents = (await getEvents("events")) as Obj[];

        setEvents(filterEvent(fetchEvents, queryValue));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pathname, queryValue]);

  return (
    <>
      <Header />
      <Suspense>
        <div className="container">
          {pathname !== "/" && (
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate(-1)}
            >
              <BsArrowLeft />
              Back
            </button>
          )}
          <Outlet context={{ events } satisfies ContextType} />
        </div>
      </Suspense>
    </>
  );
}

export function useMyEvents() {
  return useOutletContext<ContextType>();
}
