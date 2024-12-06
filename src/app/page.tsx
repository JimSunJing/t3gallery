const mockUrls = [
  "https://utfs.io/f/A3OWyvtOmv8naoIkqbTSd09syufPh3V5l6KznpNFkD7E24C8",
  "https://utfs.io/f/A3OWyvtOmv8nAOM94ZtOmv8nw3jxFY0i4PSNrVytgQB9KURD",
  "https://utfs.io/f/A3OWyvtOmv8nLR4vhfkT60GEYe7P4xUFXDsnbRJgVrAvkNhf",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="mock image" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
