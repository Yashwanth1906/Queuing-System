import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pie, PieChart, } from "recharts";

// Define the types for your inventory items
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

export function Pharmacy() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inventory,] = useState<InventoryItem[]>([
    {
      "id": 1,
      "name": "Paracetamol 500mg",
      "category": "Tablet",
      "quantity": 20,
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
      "quantity": 10,
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
      "quantity": 50,
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
      "quantity": 110,
      "price": 3.99,
      "inStock": true,
      "reorderLevel": 40,
      "lastOrderDate": "2024-01-18",
      "expiryDate": "2027-02-28"
    },
  ]
  );
  const [, setShowWard] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.quantity < 50
    );
  }, [inventory, searchTerm]);

  // const totalItems = inventory.length;
  // const availableItems = inventory.filter((item) => item.inStock).length;
  // const outOfStockItems = inventory.filter((item) => !item.inStock).length;
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
            className={`w-full justify-start gap-2 bg-muted`}
            onClick={() => {
              setShowWard(false);
            }}
          >
            <InboxIcon className="w-4 h-4" />
            Pharmacy
          </Button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-background rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-xl font-bold mb-4">Pharmacy Inventory</h2>
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
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
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
        {selectedItem && (
          <div className="bg-background rounded-lg shadow-md p-6 flex-1">
            <h2 className="text-xl font-bold mb-4">{selectedItem.name} Inventory Analysis</h2>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-card rounded-lg p-4 flex-1">
                <h3 className="text-lg font-bold mb-2">{selectedItem.name}</h3>
                <div className="text-muted-foreground text-sm">
                  {selectedItem.category} - Quantity: {selectedItem.quantity}
                </div>
              </div>
              <div className="flex-1">
                <PieChartCustomChart className="aspect-[4/3]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PieChartCustomChart(props: { className?: string }) {
  const data = [
    { name: "In Stock", value: 60 },
    { name: "Out of Stock", value: 40 },
  ];

  return (
    <div className={props.className}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart>
    </div>
  );
}
