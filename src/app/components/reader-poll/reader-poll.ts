import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PollOption {
  label: string;
  votes: number;
}

interface Poll {
  question: string;
  options: PollOption[];
  selectedIndex: number | null;
  voted: boolean;
}

@Component({
  selector: 'app-reader-poll',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './reader-poll.html',
  styleUrl: './reader-poll.css'
})
export class ReaderPoll {
  polls: Poll[] = [
    {
      question: '🏏 ನೀವು ಯೋಚಿಸುತ್ತೀರಾ RCB ತಂಡ ಮಾರಾಟಕ್ಕೆ ಬರಬಹುದು?',
      options: [
        { label: 'ಹೌದು', votes: 12 },
        { label: 'ಇಲ್ಲ', votes: 8 }
      ],
      selectedIndex: null,
      voted: false
    },
    {
      question: '🗳️ ಮುಂದಿನ ಬಿಹಾರ ಚುನಾವಣೆಯಲ್ಲಿ ಯಾರು ಗೆಲ್ಲುತ್ತಾರೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಿ?',
      options: [
        { label: 'ಎನ್‌ಡಿಎ', votes: 15 },
        { label: 'ಕಾಂಗ್ರೆಸ್ ಮೈತ್ರಿ', votes: 9 },
        { label: 'ಬಿಜೆಪಿ ಒಂಟಿಯಾಗಿ', votes: 6 }
      ],
      selectedIndex: null,
      voted: false
    },
    {
      question: '🌐 ನಮ್ಮ ಸುದ್ದಿ ವೆಬ್‌ಸೈಟ್ ನಿಮಗೆ ಇಷ್ಟವಾಗಿದೆಯೆ?',
      options: [
        { label: 'ಹೌದು ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ', votes: 20 },
        { label: 'ಮಧ್ಯಮ', votes: 5 },
        { label: 'ಇನ್ನಷ್ಟು ಸುಧಾರಣೆ ಬೇಕು', votes: 3 }
      ],
      selectedIndex: null,
      voted: false
    }
  ];

  vote(poll: Poll, index: number) {
    if (!poll.voted) {
      poll.options[index].votes++;
      poll.selectedIndex = index;
      poll.voted = true;
    }
  }

  getTotalVotes(poll: Poll): number {
    return poll.options.reduce((sum, opt) => sum + opt.votes, 0);
  }

  getPercentage(poll: Poll, option: PollOption): number {
    const total = this.getTotalVotes(poll);
    return total ? Math.round((option.votes / total) * 100) : 0;
  }
}

