export class Album {
      constructor(
            public id: string,
            public ref: string,
            public name: string,
            public title: string,
            public description: string,
            public duration: number,
            public status: string,
            public url?: string,
            public tags?: string[],
            public like?: string,
      ) { }
}

export interface List {
      id: string,
      list: string[] // string[]
};

export interface SortAlbumCallback {
      (a: Album, b: Album): number;
}

export class Music {
      constructor(
            public name: string,
            public author: string,
            public style : string,
      ) {}   

}
