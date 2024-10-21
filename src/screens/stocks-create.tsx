import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/stores/user';
import { createStockProduct } from '@/api/stocks';

interface StockFormData {
  weight_in_kgs?: number;
  cost_price?: number;
  selling_price?: number;
  internal_reference_id: string;
  quantity: number;
  photo: any;
}

const schema = Yup.object().shape({
  weight_in_kgs: Yup.number().optional(),
  cost_price: Yup.number().optional(),
  selling_price: Yup.number().optional(),
  internal_reference_id: Yup.string().required('Internal reference ID is required'),
  quantity: Yup.number().required('Quantity is required'),
  photo: Yup.mixed().defined().required('Photo is required'),
});

export default function StocksCreate() {
  const { selectedStoreId } = useUserStore();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<StockFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<StockFormData> = async (data, event) => {
    try {
      event?.preventDefault();
      event?.stopPropagation();
      await createStockProduct(selectedStoreId as string, {
        weight_in_kgs: data.weight_in_kgs,
        cost_price: data.cost_price,
        selling_price: data.selling_price,
        internal_reference_id: data.internal_reference_id,
        quantity: data.quantity
      });
      reset();
      toast.success('Stock product created successfully');
    } catch (error) {
      toast.error('Error creating stock product');
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 p-4 max-w-2xl mx-auto'>
      <h1 className='text-4xl font-bold text-gray-950 text-center mb-4'>Novo produto de stock</h1>
      <label className='text-xl font-normal text-gray-950' htmlFor="weight_in_kgs">Peso (kg)</label>
      <input
        className='border-2 border-gray-600 rounded-md h-12 shadow-lg text-foreground'
        type="number"
        id="weight_in_kgs"
        {...register('weight_in_kgs')}
      />
      <label className='text-xl font-normal text-gray-950' htmlFor="cost_price">Preço de Custo *</label>
      <input
        className='border-2 border-gray-600 rounded-md h-12 shadow-lg text-foreground'
        type="number"
        id="cost_price"
        {...register('cost_price')}
      />
      <label className='text-xl font-normal text-gray-950' htmlFor="selling_price">Preço de Venda</label>
      <input
        className='border-2 border-gray-600 rounded-md h-12 shadow-lg text-foreground'
        type="number"
        id="selling_price"
        {...register('selling_price')}
      />
      <label className='text-xl font-normal text-gray-950' htmlFor="internal_reference_id">Referência Interna *</label>
      <input
        className='border-2 border-gray-600 rounded-md h-12 shadow-lg text-foreground'
        type="text"
        id="internal_reference_id"
        {...register('internal_reference_id')}
      />
      {errors.internal_reference_id && <span>{errors.internal_reference_id.message}</span>}
      <label className='text-xl font-normal text-gray-950' htmlFor="quantity">Quantidade *</label>
      <input
        className='border-2 border-gray-600 rounded-md h-12 shadow-lg text-foreground'
        type="number"
        id="quantity"
        {...register('quantity')}
      />
      {errors.quantity && <span>{errors.quantity.message}</span>}
      <label className='text-xl font-normal text-gray-950' htmlFor="photo">Foto do Produto *</label>
      <input
        className={cn(buttonVariants({ variant: 'ghost' }), 'border-2 ng-transparent border-gray-600 rounded-md h-12', errors.photo && 'border-red-500')}
        type="file"
        id="photo"
        accept="image/*"
        {...register('photo')}
        onChange={handlePhotoChange}
      />
      {errors.photo && <span className="text-red-500">{errors.photo.message as string}</span>}
      {previewUrl && (
        <div className="mx-auto">
          <img src={previewUrl} alt="Preview" className="max-w-xs max-h-48 object-contain rounded-md" />
        </div>
      )}
      <Button type="submit" className='p-10 text-xl font-semibold uppercase'>Criar Produto de Stock</Button>
    </form>
  );
}
