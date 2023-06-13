export interface JsonInterface {
	trendingMenu: MenuData[];
	recentMenu:   MenuData[];
	categories:   Category[];
}

export interface TrendingMenu {
	trendingMenu: MenuData[]
}
export interface Category {
	category: string;
}

export interface MenuDescription {
	img:         string;
	Description: string;
	index: number;
	imgDimensions?: ImgDimensions
}

export interface MenuData {
	menuData: MenuDescription[]
}

export interface ImgDimensions {
	hgt: number,
	wdt: number
}