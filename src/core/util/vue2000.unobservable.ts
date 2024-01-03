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
): T {
  let config: any
  if (options && 'whitelist' in options && Array.isArray(options.whitelist)) {
    config = options.whitelist
    config.isWhitelist = true
  } else if (options && 'keys' in options && Array.isArray(options.keys)) {
    config = options.keys
  } else {
    config = true
  }

  Object.defineProperty(value, '__vueUnobservable', {
    value: config,
    enumerable: false
  })

  return value
}

/**
 * Check if an object has unobservable config
 * vue2000: is feature of vue2000
 */
export function isUnobservable(value: any): boolean {
  return value && value.__vueUnobservable
}

/**
 * Clear unobservable config of an object
 * vue2000: is feature of vue2000
 */
export function clearUnobservable<T>(value: T): T {
  // @ts-ignore
  delete value.__vueUnobservable
  return value
}
