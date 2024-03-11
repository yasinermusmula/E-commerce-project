export const CHANGE_STORE_NAME = "CHANGE_STORE_NAME";

export const CHANGE_STORE_PHONE = "CHANGE_STORE_PHONE";

export const CHANGE_STORE_TAX = "CHANGE_STORE_TAX";
export const CHANGE_STORE_BANK_ACCOUNT = "CHANGE_STORE_BANK_ACCOUNT";

export function changeStoreName(storeName) {
  return { type: CHANGE_STORE_NAME, payload: storeName };
}

export function changeStorePhone(storePhone) {
  return { type: CHANGE_STORE_PHONE, payload: storePhone };
}
export function changeStoreTax(storeTax) {
  return { type: CHANGE_STORE_TAX, payload: storeTax };
}

export function changeStoreBankAccount(storeBankAcc) {
  return { type: CHANGE_STORE_BANK_ACCOUNT, payload: storeBankAcc };
}
