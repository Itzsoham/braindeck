function Tag({ tag }: { tag: string }) {
  return (
    <div className="inline-block px-2 py-0.5 text-xs bg-blue-200 text-blue-800 rounded-xl mr-2">
      #{tag}
    </div>
  );
}

export default Tag;
