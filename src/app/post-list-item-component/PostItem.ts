export default class PostItem {
    title: string;
    content: string;
    loveIts: number;
    created_at: number;

    constructor(
      title: string,
      content: string
      ){
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = Date.now();
    }
}
