tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper:    '#F5F4F2',
        stone:    '#EBE9E5',
        line:     '#E0DDD7',
        hair:     '#CFCBC3',
        ink:      '#16191C',
        body:     '#474E55',
        mute:     '#6E767D',
        soft:     '#9AA1A7',
        char:     '#14181C',
        char2:    '#1D2227',
        charline: '#2B3237',
        red:     { DEFAULT:'#C62026', lt:'#E4373D', dk:'#9C1A1F', mist:'#FBEEEE' },
        navy:    { DEFAULT:'#1F356A', lt:'#2F4C8F', dk:'#16264C' },
        steel:   { 1:'#9E99A9', 2:'#7C7785', 3:'#5D5C60' },
        g: { blue: '#4285F4', red: '#EA4335', yellow: '#FBBC05', green: '#34A853' },
      },
      fontFamily: {
        display: ['"Saira Condensed"','system-ui','sans-serif'],
        sans:    ['Barlow','system-ui','sans-serif'],
      },
      maxWidth: { shell: '1240px' },
    },
  },
};
