export function isUnobservable(value: any): boolean
/**
 * Clear unobservable config of an object
 * vue2000: is feature of vue2000
 */
export function clearUnobservable<T>(value: T): T

/**
 * Make an object unobservable by Vue2 reactive system
 * Thus better manual optimization performance
 *
 * You can individually specify whether some keys of the object are observable or unobservable
 *
 * vue2000: is feature of vue2000
 * @param value target object
 * @param options.whitelist whitelist of keys to be observable
 * @param options.keys only these keys will be Unobservable
 */
export function setUnobservable<T>(
  value: T,
  options?: { whitelist: string[] } | { keys: string[] }
): T
