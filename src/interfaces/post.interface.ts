export default interface IPost {
  user: {
    avatar: string
    name: string
  }
  date: string
  image: string
  likes: number
  tags: Array<string>
}