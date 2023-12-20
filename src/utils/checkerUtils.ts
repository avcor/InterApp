import { dealType } from '../types/PopularType';

export function isDealType(obj: any): obj is dealType {
    return 'deal' in obj && 'discount' in obj && 'end' in obj;
}
