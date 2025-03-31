import { Word } from "../../utils/types";
import { makeFirstLetterUppercase } from "../../utils/lib";

interface WordCardProps {
  word: Word;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <div className="mt-6 bg-white border border-gray-200 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto transition hover:shadow-2xl">
      <div className="text-center my-5">
        <h3 className="text-3xl font-extrabold text-gray-900">
          {makeFirstLetterUppercase(word.word)}
        </h3>
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-gray-600">
          {word.phonetics?.map((phonetic, index) => (
            <div key={index} className="flex items-center gap-2">
              {phonetic.text && <span className="italic">{phonetic.text}</span>}
              {phonetic.audio && (
                <audio controls className="h-6">
                  <source src={phonetic.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-3xl font-extrabold text-gray-900">Definitions</h3>
        {word.meanings.map((meaning, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-semibold text-primary">
              {meaning.partOfSpeech}
            </h4>

            <ul className="mt-3 space-y-3">
              {meaning.definitions.map((definition, i) => (
                <li key={i} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="text-gray-800">{definition.definition}</p>

                  {definition.example && (
                    <p className="text-gray-600 italic mt-1">
                      "{definition.example}"
                    </p>
                  )}

                  {(definition.synonyms ?? []).length > 0 ||
                  (definition.antonyms ?? []).length > 0 ? (
                    <div className="mt-2 text-sm text-gray-500">
                      {definition.synonyms?.length ? (
                        <p>
                          <strong className="text-gray-700">Synonyms:</strong>{" "}
                          {definition.synonyms.join(", ")}
                        </p>
                      ) : null}

                      {definition.antonyms?.length ? (
                        <p>
                          <strong className="text-gray-700">Antonyms:</strong>{" "}
                          {definition.antonyms.join(", ")}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>

            {(meaning.synonyms ?? []).length > 0 && (
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  <strong className="text-gray-700">Synonyms:</strong>{" "}
                  {(meaning.synonyms ?? []).join(", ")}
                </p>
              </div>
            )}

            {(meaning.antonyms ?? []).length > 0 && (
              <div className="mt-2 text-sm text-gray-500">
                <p>
                  <strong className="text-gray-700">Antonyms:</strong>{" "}
                  {(meaning.antonyms ?? []).join(", ")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {word.sourceUrls.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h4 className="text-3xl font-extrabold text-gray-900 my-5">
            Sources
          </h4>
          <ul className="list-disc pl-5 text-blue-600">
            {word.sourceUrls.map((url, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordCard;
