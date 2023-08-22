interface PropTitle {
  titleError: string;
}

export default function ErrorElement({ titleError }: PropTitle) {
  return (
    <div className="box-not-found">
      <h2 className="title-not-found">{titleError}</h2>
    </div>
  );
}
