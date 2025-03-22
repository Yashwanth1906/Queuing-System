import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pie, PieChart, Tooltip } from "recharts";

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  inStock: boolean;
  reorderLevel: number;
  lastOrderDate: string;
  expiryDate: string;
}

export function Substore() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inventory,] = useState<InventoryItem[]>([
    {
      "id": 1,
      "name": "Paracetamol 500mg",
      "category": "Tablet",
      "quantity": 80,
      "price": 1.50,
      "inStock": true,
      "reorderLevel": 30,
      "lastOrderDate": "2024-02-15",
      "expiryDate": "2026-05-20"
    },
    {
      "id": 2,
      "name": "Amoxicillin 250mg",
      "category": "Capsule",
      "quantity": 60,
      "price": 2.99,
      "inStock": true,
      "reorderLevel": 20,
      "lastOrderDate": "2024-01-10",
      "expiryDate": "2025-12-15"
    },
    {
      "id": 3,
      "name": "Cetirizine 10mg",
      "category": "Tablet",
      "quantity": 40,
      "price": 1.20,
      "inStock": true,
      "reorderLevel": 15,
      "lastOrderDate": "2023-12-22",
      "expiryDate": "2025-08-10"
    },
    {
      "id": 4,
      "name": "Ibuprofen 400mg",
      "category": "Tablet",
      "quantity": 50,
      "price": 2.50,
      "inStock": true,
      "reorderLevel": 25,
      "lastOrderDate": "2024-02-05",
      "expiryDate": "2026-03-30"
    },
    {
      "id": 5,
      "name": "Metformin 500mg",
      "category": "Tablet",
      "quantity": 90,
      "price": 3.99,
      "inStock": true,
      "reorderLevel": 40,
      "lastOrderDate": "2024-01-18",
      "expiryDate": "2027-02-28"
    },
    {
      "id": 6,
      "name": "Cough Syrup 100ml",
      "category": "Syrup",
      "quantity": 50,
      "price": 4.50,
      "inStock": true,
      "reorderLevel": 10,
      "lastOrderDate": "2024-03-01",
      "expiryDate": "2025-06-15"
    },
    {
      "id": 7,
      "name": "Omeprazole 20mg",
      "category": "Capsule",
      "quantity": 70,
      "price": 2.75,
      "inStock": true,
      "reorderLevel": 20,
      "lastOrderDate": "2024-02-10",
      "expiryDate": "2026-09-05"
    },
  ]
  );
  const [showPharmacy, setShowPharmacy] = useState<boolean>(false);
  const [showWard, setShowWard] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredInventory = useMemo(() => {
    if (showPharmacy) {
      return inventory.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.category === "Specialty"
      );
    } else if (showWard) {
      return inventory.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.quantity < 50
      );
    } else {
      return inventory.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.quantity < 50
      );
    }
  }, [inventory, searchTerm, showPharmacy, showWard]);

  const subStoreAvailableItems = filteredInventory.filter((item) => item.inStock).length;
  const subStoreOutOfStockItems = filteredInventory.filter((item) => !item.inStock).length;

  return (
    <div className="flex h-screen">
      <div className="bg-background border-r w-64 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <Button
            variant="ghost"
            size="sm"
            className={`w-full justify-start gap-2 ${!showPharmacy && !showWard ? "bg-muted" : ""}`}
            onClick={() => {
              setShowPharmacy(false);
              setShowWard(false);
            }}
          >
            Sub Store
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`w-full justify-start gap-2 ${showPharmacy ? "bg-muted" : ""}`}
            onClick={() => {
              setShowPharmacy(true);
              setShowWard(false);
            }}
          >
            Pharmacy
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`w-full justify-start gap-2 ${showWard ? "bg-muted" : ""}`}
            onClick={() => {
              setShowPharmacy(false);
              setShowWard(true);
            }}
          >
            Ward
          </Button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {(showPharmacy || showWard || (!showPharmacy && !showWard)) && (
          <div className="bg-background rounded-lg shadow-md p-6 flex-1">
            <h2 className="text-xl font-bold mb-4">
              {showPharmacy ? "Pharmacy" : showWard ? "Ward" : "Sub Store"} Inventory
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Total Items</h3>
                <p className="text-4xl font-bold">{filteredInventory.length}</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Available</h3>
                <p className="text-4xl font-bold">{subStoreAvailableItems}</p>
              </div>
              <div className="bg-card rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Out of Stock</h3>
                <p className="text-4xl font-bold">{subStoreOutOfStockItems}</p>
              </div>
            </div>
            <div className="relative mt-4">
              <Input
                type="text"
                placeholder="Search for an item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg bg-card pl-10 pr-4 py-2 text-foreground"
              />
            </div>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>In Stock</TableHead>
                    <TableHead>Reorder Level</TableHead>
                    <TableHead>Last Order Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="cursor-pointer hover:bg-muted"
                    >
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        {item.inStock ? (
                          <Badge variant="secondary">In Stock</Badge>
                        ) : (
                          <Badge variant="outline">Out of Stock</Badge>
                        )}
                      </TableCell>
                      <TableCell>{item.reorderLevel}</TableCell>
                      <TableCell>{item.lastOrderDate}</TableCell>
                      <TableCell>{item.expiryDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
        {selectedItem && (
          <div className="bg-background rounded-lg shadow-md p-6 flex-1">
            <h2 className="text-xl font-bold mb-4">{selectedItem.name} Inventory Analysis</h2>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-card rounded-lg p-4 flex-1">
                <h3 className="text-lg font-bold mb-2">{selectedItem.name}</h3>
                <div className="text-muted-foreground text-sm">
                  <p>Category: {selectedItem.category}</p>
                  <p>Quantity: {selectedItem.quantity}</p>
                  <p>Price: ${selectedItem.price.toFixed(2)}</p>
                  <p>In Stock: {selectedItem.inStock ? "Yes" : "No"}</p>
                  <p>Reorder Level: {selectedItem.reorderLevel}</p>
                  <p>Last Order Date: {selectedItem.lastOrderDate}</p>
                  <p>Expiry Date: {selectedItem.expiryDate}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <PieChart width={200} height={200}>
                  <Pie
                    dataKey="quantity"
                    data={filteredInventory}
                    cx={100}
                    cy={100}
                    outerRadius={80}
                    fill="#8884d8"
                  />
                  <Tooltip content={<TooltipContent />} />
                </PieChart>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TooltipContent({ payload, label }: any) {
  if (payload && payload.length) {
    return (
      <div className="p-2 bg-white border border-gray-300 rounded">
        <p className="font-bold">{label}</p>
        <p>Quantity: {payload[0].value}</p>
      </div>
    );
  }
  return null;
}
