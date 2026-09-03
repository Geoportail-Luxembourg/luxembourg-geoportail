import { AttributeEntry, Attributes, FeatureJSON } from '../../models';
export declare function sortedAttributeEntries(attributes: Attributes, ordered: boolean, prefix?: string): AttributeEntry[];
export declare function hasAttributes(feature: FeatureJSON): boolean;
/**
 * Check if the feature has a property with the given key and a minimum length.
 * @param key The property key to check.
 * @param feature The feature to check against.
 * @param minLength The minimum length of the property value (default is 0).
 * @returns True if the property exists and its value length is greater than minLength, false otherwise.
 * */
export declare function hasProperty(key: string, feature: FeatureJSON, minLength: number): boolean;
export declare function isEmptyString(value: string | undefined | null): boolean;
export declare function isLink(value: any): boolean;
export declare function showAttributesByLang(elem: {
    [key: string]: any;
}, layerid: string, language: string): boolean;
export declare function hasValidFID(feature: {
    fid?: string;
}): boolean;
export declare function isFIDValid(fid: string | undefined): boolean;
export declare function getTrustedUrl(url: string): string;
export declare function getTrustedUrlByLang(urlFr: string, urlDe: string | null | undefined, urlEn: string | null | undefined, urlLb: string | null | undefined): string;
/**
 * Join all attributes 'attr' from feature list
 * @param features The feature
 * @param attr Attribute to join
 * @param sep The join separator (default is ',')
 * @returns The string with joined attributes
 */
export declare function joinAttributes(features: FeatureJSON[], attr: string, sep?: string): string;
/**
 * Translate and join the elements of the array
 * @param textArray
 * @param prefix
 */
export declare function translateAndjoin(textArray: string[], prefix: string): string;
/**
 * Format a date string for display.
 * @param dateString ISO date string
 * @param language BCP-47 locale (default 'fr-FR')
 * @param includeTime Whether to append the time
 */
export declare function formatDate(dateString: string, language?: string, includeTime?: boolean): string;
/**
 * Resolve a mymaps resource path against the legacy v3 API host.
 * @param resource The resource path or data URI
 * @param v3ApiHost The v3 API host base URL (from the host config)
 */
export declare function getMymapsPath(resource: string, v3ApiHost?: string): string | undefined;
/**
 * Build the QR-code image URL for a mymaps map id.
 * @param mapId The mymaps map id
 * @param qrUrl The QR service base URL (from the host config)
 */
export declare function getQRUrlForMyMaps(mapId: string | undefined, qrUrl?: string): string | undefined;
