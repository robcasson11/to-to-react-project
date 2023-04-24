import ItemList from "./itemList";

const Content = ({items, handleClick, handleDelete}) => {

  return (
    <main>
      {items.length ? (
        <ItemList
        items={items}
        handleClick={handleClick}
        handleDelete={handleDelete}
        />
      ) : (<p style={{margintop:"2rem"}}>Please add an item.</p>)}
    </main>
  )
}

export default Content