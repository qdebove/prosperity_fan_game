export enum Calculation {
  Capital = "capital",
  Energy = "energy",
  Environment = "environment",
  Research = "research",
  Prosperity = "prosperity",
}

export function getViewFromCalculation(calculation: Calculation): string {
  switch (calculation) {
    case Calculation.Capital:
      return "Capital";
    case Calculation.Energy:
      return "Energy";
    case Calculation.Environment:
      return "Environment";
    case Calculation.Research:
      return "Research";
    case Calculation.Prosperity:
      return "Prosperity";
  }
}
