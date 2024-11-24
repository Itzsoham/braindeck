import { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import VideoIcon from "../icons/VideoIcon";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import TwitterIcon from "../icons/TwitterIcon";
import CreateContentModel from "../components/CreateContentModel";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3">
      <CreateContentModel open={open} onClose={() => setOpen(false)} />
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-semibold text-gray-800">Home</h1>
        <div className="flex gap-3">
          <Button variant="secondary" icon={<ShareIcon />}>
            Share Brain
          </Button>
          <Button icon={<PlusIcon />} onClick={() => setOpen(true)}>
            Add Content
          </Button>
        </div>
      </div>

      <div className="flex mt-10 gap-3">
        <Card
          icon={<VideoIcon className="h-7 w-7" />}
          type="youtube"
          title="Share you shits here"
          date="11/11/2025"
          link="https://www.youtube.com/embed/WNejYnN13bw?si=LASrw1qfe03k3Uft"
        />
        <Card
          icon={<TwitterIcon />}
          type="tweet"
          title="Share you tweets here"
          date="11/11/2025"
          link="https://twitter.com/sohammaury/status/1858124619762581653"
        />
      </div>
    </div>
  );
}
