import FileIcon from "../icons/FileIcon";
// import TweetEmbed from "./TweetEmbed";
import Tag from "./Tag";

interface CardProps {
  icon: React.ReactElement;
  title: string;
  type: "tweet" | "youtube" | "notion";
  link: string;
  tags?: string[];
  date?: string;
}

export default function Card({
  icon,
  title,
  type,
  link,
  tags = ["meme", "funny"],
  date,
}: CardProps) {
  return (
    <div className="p-5 flex flex-col  bg-white rounded-md border-gray-200 w-80 border">
      <div>
        <div className="flex justify-between items-center text-gray-700">
          <div className="flex gap-1 items-center">
            {icon}
            <span className="text-black"> {title}</span>
          </div>
          <div className="flex gap-2">
            <FileIcon />
            <FileIcon />
          </div>
        </div>
      </div>
      <div className="my-2 max-h-[400px] overflow-auto">
        {type === "youtube" && (
          <iframe
            className="rounded-md max-h-[400px]"
            src={link.replace("watch?v=", "embed/")}
          ></iframe>
        )}
        {type === "tweet" && (
          <blockquote className="twitter-tweet max-h-7">
            <a href={link.replace("x.com", "twitter.com")} />
          </blockquote>
        )}
      </div>
      <div className="my-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="text-sm mt-auto">Added on {date}</div>
    </div>
  );
}
