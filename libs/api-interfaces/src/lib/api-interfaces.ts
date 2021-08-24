export interface Friend {
  id: string;
  name: string;
  description: string;
  yearsKnown: number;
  coolnessLevel: number;
  closeFriend: boolean;
}

export const emptyFriend = {
  id: '',
  name: '',
  description: '',
  yearsKnown: 0,
  coolnessLevel: 0,
  closeFriend: false,
};
