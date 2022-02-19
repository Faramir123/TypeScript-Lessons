import { renderBlock } from "./lib.js";

export class localStorageUser {
  name?: string;
  avatarUrl?: string;
  favoritesAmount?: number;
  constructor(name?: string, avatarUrl?: string, favoritesAmount?: number) {
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.favoritesAmount = favoritesAmount;
  }
}

export function getUserData(value: unknown) {
  if (value instanceof localStorageUser) {
    return value;
  }
}

export function getFavoritesAmount(favoritesAmount: unknown) {
  if (favoritesAmount instanceof localStorageUser) return favoritesAmount;
}

export function renderUserBlock(
  userName: string | undefined,
  avatarUrl: string | undefined,
  favoriteItemsAmount: number
) {
  const favoritesCaption =
    favoriteItemsAmount > 0 ? favoriteItemsAmount : "ничего нет";
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false;

  renderBlock(
    "user-block",
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${
              hasFavoriteItems ? " active" : ""
            }"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}
