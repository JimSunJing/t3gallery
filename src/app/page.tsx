import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} alt="mock image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
