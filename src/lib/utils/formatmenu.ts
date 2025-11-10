import type { MenuCategory, MenuItem, MenuItemVariant } from '../../types/apitypes'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface FormattedMenuItem {
  name: string
  description: string
  price: number
  image: {
    src: string
    alt: string
  }
  variants: {
    details: string
    price: number
  }[]
}

export interface FormattedMenuSection {
  title: string
  items: FormattedMenuItem[]
}


// Format single menu utem
export const structureMenuItemData = (apiItem: MenuItem, allVariants: MenuItemVariant[]): FormattedMenuItem => {


  // Add optional variants inside each product
  const variants = allVariants.filter((variant) => variant.menu_item === apiItem.id)
  const formattedVariants = variants.map((variant) => {
    return {
      details: variant.details,
      price: parseFloat(variant.price),
    }
  })

  return {
    name: apiItem.name,
    description: apiItem.details,
    price: parseFloat(apiItem.price),
    image: {
      src: `${API_BASE_URL}/assets/${apiItem.photo}`,
      alt: apiItem.name,
    },
    variants: formattedVariants,
  }
}

export const structureMenuData = (
  categories: MenuCategory[],
  allItems: MenuItem[],
  allVariants: MenuItemVariant[]
): FormattedMenuSection[] => {

  const formattedMenu = categories.map((category) => {
    const itemsForCategory = allItems.filter(
      (item) => item.category === category.id
    )

    const formattedItems = itemsForCategory.map((apiItem) => {
      return structureMenuItemData(apiItem, allVariants)
    })

    return {
      title: category.name,
      items: formattedItems,
    }
  })

  return formattedMenu
}
