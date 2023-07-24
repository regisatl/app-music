export class Album {

      'id': string;
      'ref': string;
      'name': string;
      'title': string;
      'description': string;
      'duration': number;
      'status': string;
      'url'?: string;
      'tags'?: Array<string>;
      'like'?: string;
      'note'?: Array<number>
      'tracks'?: string[] | undefined;

}


export class List {
      'id': string;
      'list': Array<string>

}

export class Img {
      'id' : string;
      'url' : string
}
