import { Cordova, Plugin } from './plugin';


/**
 * @name NativeStorage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from 'ionic-native';
 *
 * NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * NativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-nativestorage',
  pluginRef: 'NativeStorage',
  repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage'
})
export class NativeStorage {
  /**
   * Stores a value
   * @param reference {string}
   * @param value
   */
  @Cordova()
  static setItem(reference: string, value: any): Promise<any> {return; }

  /**
   * Gets a stored item
   * @param reference {string}
   */
  @Cordova()
  static getItem(reference: string): Promise<any> {return; }

  /**
   * Removes a single stored item
   * @param reference {string}
   */
  @Cordova()
  static remove(reference: string): Promise<any> {return; }

  /**
   * Removes all stored values.
   */
  @Cordova()
  static clear(): Promise<any> {return; }

}
