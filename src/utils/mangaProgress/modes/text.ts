import { ModeAbstract } from '../ModeAbstract';

type arguements = {
  selector: string;
  regex: string;
};

export class text extends ModeAbstract<arguements> {
  execute(args: arguements) {
    let textString = j.$(args.selector).first().text().trim();
    if (args.regex) {
      const regex = new RegExp(args.regex);
      const match = textString.match(regex);
      if (match) {
        [textString] = match;
      }
    }
    const n = Number(textString);
    if (Number.isNaN(n) || n === 0)
      throw new Error(`No number found in text '${textString}' (${n})`);

    return n;
  }
}
