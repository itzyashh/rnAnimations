export const LIGHT_GRAPH_SCORES = [
    100, 53, 82, 59, 43, 63, 51, 66, 54, 62, 72, 81, 89, 100, 100, 100, 96, 98,
    100, 100, 100, 100, 100, 93, 97, 100, 100,
  ];
  export const STANDARD_GRAPH_SCORES = [
    84, 42, 67, 48, 35, 54, 43, 57, 47, 53, 61, 68, 77, 85, 87, 93, 82, 84, 88,
    87, 95, 91, 90, 77, 82, 87, 92,
  ];
  export const PRO_GRAPH_SCORES = [
    70, 35, 55, 39, 29, 46, 37, 50, 40, 45, 51, 57, 65, 73, 74, 80, 71, 71, 75,
    73, 79, 75, 74, 63, 69, 74, 79,
  ];
  
  export const getScores = (option: string) => {
    switch (option.toLowerCase()) {
      case 'light':
        return LIGHT_GRAPH_SCORES;
      case 'standard':
        return STANDARD_GRAPH_SCORES;
      case 'pro':
        return PRO_GRAPH_SCORES;
      default:
        return LIGHT_GRAPH_SCORES;
    }
  }