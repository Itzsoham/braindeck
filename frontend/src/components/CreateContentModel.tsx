import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";

export default function CreateContentModel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 w-full h-screen bg-backdrop-color backdrop-blur-sm z-1000 transition-all duration-500">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-color-grey-3 rounded-md shadow-lg p-3 transition-all  duration-500">
            <div className="float-right	">
              <Button onClick={onClose}>
                <CloseIcon />
              </Button>
            </div>
            <input
              type="text"
              className="w-full mt-4 p-2 border border-gray-200 rounded-lg"
              placeholder="Title"
            />
            <input
              type="text"
              className="w-full mt-4 p-2 border border-gray-200 rounded-lg"
              placeholder="Link"
            />
            <div className="mt-4">
              <Button>Save</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
