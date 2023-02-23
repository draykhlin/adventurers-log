
import './App.css'

const App = () => {

  return (
    <div className="container">
      {/* <Header
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem} />

      {showAddItem && <AddItem onAdd={addItem} />} */}
      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} />) : (
          'Your inventory is empty'
        )}
    </div>
  )
}

export default App
