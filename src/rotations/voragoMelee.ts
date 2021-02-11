import { Boss } from './types';
export default {
    name: 'vorago_melee',
    phases: [
        'Phase 1',
        'Phase 2',
        'Phase 3',
        'Phase 4',
        'Phase 5',
    ],
    rotations: [
        [
            'Barricade',
            'Bash',
        ],
        [
            'Backhand',
            'Blood_Tendrils',
        ],
        [
            'Assault',
            'Cleave',
        ],
        [
            'Debilitate',
            'Decimate',
        ],
        [
            'Berserk',
            'Assault',
        ],
    ],
} as Boss;
