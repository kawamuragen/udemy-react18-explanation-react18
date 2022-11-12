import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
  userId: number;
  id: number;
  title: string;
};

const fetchAlbums = async () => {
  const result = await axios.get<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return result.data;
};

const ReactQuery = () => {
  // useQuery：
  // 第一引数：キャッシュを効かせるために必要なキー
  // 第二引数：どういうfetchを行うかの関数を渡す。
  const { isLoading, error, data } = useQuery<Album[]>(["albums"], fetchAlbums);

  if (error) return <p>エラーです！</p>;
  if (isLoading) return <p>ローディング中です。。。</p>;

  return (
    <div>
      <p>React Query</p>
      {data?.map((album) => (
        <p key={album.id}>{album.title}</p>
      ))}
    </div>
  );
};

export default ReactQuery;
