import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ header, price, image }) {
  return (
    <Card className="bg-white">
      <CardContent className="flex flex-col items-center">
        <img src="https://generated.vusercontent.net/placeholder.svg" alt="Product 4" className="mb-4 mt-4" />
        <h3 className="text-lg font-semibold">{header}</h3>
        <p className="text-gray-500 mb-2">{price}</p>
        <Button variant="secondary">Add to Cart</Button>
      </CardContent>
    </Card>
  )

}

