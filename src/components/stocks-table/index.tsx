import { getStock } from "@/api/stocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { useQuery } from "react-query";
import { useUserStore } from "@/stores/user";
import { Navigate } from "react-router-dom";

export const StocksTable = () => {
  const { selectedStoreId } = useUserStore();
  if (!selectedStoreId) {
    return <Navigate to="/stores" replace />;
  }
  const { data, isLoading } = useQuery({
    queryKey: ["getStock"],
    queryFn: () => getStock(selectedStoreId)
  });

  console.log(data, isLoading);

  return (
    <Table className="mx-auto">
      <TableHeader className="sticky top-0 bg-foreground">
        <TableRow>
          <TableHead className="text-left">Detailhes</TableHead>
          <TableHead className="text-center w-40">Imagem</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-left flex flex-grow flex-col">
            <p className="font-semibold">Ref.:</p>
            <p className="font-semibold">Ref. Interna:</p>
            <p className="font-semibold">Preço de Custo:</p>
            <p className="font-semibold">Preço de Venda:</p>
            <p className="font-semibold">Stock Disponível:</p>
            <p className="font-semibold">Stock Reservado:</p>
            <p className="font-semibold">Stock em Processamento:</p>
            <p className="font-semibold">Stock Entregue:</p>
          </TableCell>
          <TableCell className="w-40">
            <img src="https://picsum.photos/200/300" alt="img" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
