export type Post = {
  id: number,
  title: string
  content: string
}

export function useBlogPosts() {
  const blogPosts = ref<Post[]>([
    {
      id: 1,
      title: 'The Beauty of Nature',
      content: '<p>Exploring the wonders of our natural world, from the depths of the ocean to the peaks of mountains.</p><p>Discover the diverse ecosystems and the importance of preserving our planet\'s beauty.</p>',
    },
    {
      id: 2,
      title: 'The Future of Technology',
      content: '<h2>Emerging Trends</h2><p>Delving into the latest advancements in AI, robotics, and sustainable energy.</p><p>Understanding how these technologies will shape our future.</p>',
    },
    {
      id: 3,
      title: 'Traveling the World',
      content: '<h3>Exotic Destinations</h3><p>Join us on a journey to the most breathtaking locations around the globe.</p><ul><li>Paris</li><li>Tokyo</li><li>Cape Town</li></ul>',
    },
    {
      id: 4,
      title: 'Healthy Living Tips',
      content: '<h4>Nutrition and Exercise</h4><p>Simple and effective tips for a healthier lifestyle.</p><p>Including meal plans, workout routines, and stress management techniques.</p>',
    },
    {
      id: 5,
      title: 'Mastering Web Development',
      content: '<p>From HTML basics to advanced JavaScript frameworks.</p><p>Guides, tutorials, and best practices for aspiring web developers.</p>',
    },
  ])

  function getBlogPost(id: Post['id']): Post | undefined {
    return blogPosts.value.find((post) => {
      return post.id === id
    })
  }

  return { blogPosts, getBlogPost }
}


