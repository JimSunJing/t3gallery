import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/A3OWyvtOmv8naoIkqbTSd09syufPh3V5l6KznpNFkD7E24C8",
  "https://utfs.io/f/A3OWyvtOmv8nAOM94ZtOmv8nw3jxFY0i4PSNrVytgQB9KURD",
  "https://utfs.io/f/A3OWyvtOmv8nLR4vhfkT60GEYe7P4xUFXDsnbRJgVrAvkNhf",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const data = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {data.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="mock image" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
