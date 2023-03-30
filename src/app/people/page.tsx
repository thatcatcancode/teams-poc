async function getData() {
  const res = await fetch(
    "https://experience-service.flokubernetes.com/web/people"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function People() {
  const data = await getData();
  return (
    <main>
      <h1>{data.sections[0].title}</h1>
      {/* TODO import types pkg */}
      {data.sections.map(
        (section: {
          items: { type: string; thumbnail_image: { url: string } }[];
        }) => {
          return section.items.map((item) => {
            if (item.type === "avatar") {
              return (
                <div>
                  <img src={item.thumbnail_image.url} />
                </div>
              );
            }
          });
        }
      )}
    </main>
  );
}
