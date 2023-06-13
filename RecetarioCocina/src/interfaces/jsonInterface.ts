import { Category, MenuData } from "./menuData";

export interface JsonInterface {
	trendingMenu: MenuData[];
	recentMenu:   MenuData[];
	categories:   Category[];
}