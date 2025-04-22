import { Badge } from 'lucide-react';


const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags?.map((tag) => (
      <Badge key={tag}>{tag}</Badge>
    ))}
  </div>
);

export default TagList;
