const ITEMS = [
   {name: 'item1', qty: 5},
   {name: 'item2', qty: 10},
   {name: 'item3', qty: 20}
]

function App() {
   return <EditableInventoryList items={ITEMS} />
}

   function EditableInventoryList() {
      const [items, setItems] = useState([])

      return (
         <div>
            <AddItemForm />
            <InventoryList items={items} />
         </div>
      )
   }

      function AddItemForm({  }) {
         const [inputText, setinputText] = useState('')

         const handleSubmit = async (e) => {
            
         }

         return (
            <form onSubmit={handleSubmit}>
               <input value={inputText} onChange={(e) => setinputText(e.target.value)} />

               <input type="submit" />
            </form>
         )
      }

      function InventoryList({ items }) {
         return (
            <ul>
               {items.map((item) => 
                  <ItemRow item={item} />
               )}
            </ul>
         )
      }

         function ItemRow({ item }) {
            return (
               <li>{item.name}</li>
            )
         }