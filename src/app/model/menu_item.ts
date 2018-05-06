export interface MenuItem {
  key: string;
  icon: string;
  url?: string;
  subitems?:Array<MenuItem>;
}
