import { atomWithQuery } from 'jotai-tanstack-query'

export interface MentorCard {
  _uid: string
  person_name: string
  person_title: string
  person_img: {
    filename: string
  }
}


const mockMentors: MentorCard[] = [
  {
    _uid: '1',
    person_name: 'Alice Johnson',
    person_title: 'AI Researcher',
    person_img: { filename: '/imgs/defaultSpeaker.png' },
  },
  {
    _uid: '2',
    person_name: 'Bob Chen',
    person_title: 'Full-Stack Developer',
    person_img: { filename: '/imgs/defaultSpeaker.png' },
  },
  {
    _uid: '3',
    person_name: 'Carla Smith',
    person_title: 'Product Designer',
    person_img: { filename: '/imgs/defaultSpeaker.png' },
  },
  {
    _uid: '4',
    person_name: 'Carla Smith',
    person_title: 'Product Designer',
    person_img: { filename: '/imgs/defaultSpeaker.png' },
  },
]

export const MentorsAtom = atomWithQuery<MentorCard[]>((get) => ({
  queryKey: ['mentors'],
  queryFn: async () => {
    // simulate delays
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockMentors
  },
}))
