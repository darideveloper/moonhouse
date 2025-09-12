import type { MenuCategory, MenuItem } from '../../types/apitypes'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface FormattedMenuItem {
  name: string
  description: string
  price: number
  image: {
    src: string
    alt: string
  }
}

export interface FormattedMenuSection {
  title: string
  items: FormattedMenuItem[]
}


// Format single menu utem
export const structureMenuItemData = (apiItem: MenuItem): FormattedMenuItem => {
  return {
    name: apiItem.name,
    description: apiItem.details,
    price: parseFloat(apiItem.price),
    image: {
      src: `${API_BASE_URL}/assets/${apiItem.photo}`,
      alt: apiItem.name,
    },
  }
}

export const structureMenuData = (
  categories: MenuCategory[],
  allItems: MenuItem[]
): FormattedMenuSection[] => {

  const formattedMenu = categories.map((category) => {
    const itemsForCategory = allItems.filter(
      (item) => item.category === category.id
    )

    const formattedItems = itemsForCategory.map((apiItem) => {
      return structureMenuItemData(apiItem)
    })

    return {
      title: category.name,
      items: formattedItems,
    }
  })

  return formattedMenu
}
