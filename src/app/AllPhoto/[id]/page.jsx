const page = async ({ params }) => {
  const resolvedParams = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  const item = photos.find((i) => String(i.id) === String(resolvedParams.id));

  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
};

export default page;
