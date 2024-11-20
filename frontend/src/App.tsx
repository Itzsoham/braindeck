import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

export default function App() {
  return (
    <div className="flex justify-center h-screen items-center gap-4">
      <Button variant="outline" icon={<ShareIcon size="sm" />}>
        Share{" "}
      </Button>
      <Button variant="danger" icon={<PlusIcon size="md" />}>
        Add New
      </Button>
      <Button size="sm">Text</Button>
      <Button size="lg" variant="outline">
        Text
      </Button>
    </div>
  );
}
