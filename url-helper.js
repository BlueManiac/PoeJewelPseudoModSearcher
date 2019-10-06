const jsonUrl = JsonUrl('lzw');

export let encode = jsonUrl.compress;
export let decode = jsonUrl.decompress;