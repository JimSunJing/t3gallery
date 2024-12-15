import { getImageById } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l border-white">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
