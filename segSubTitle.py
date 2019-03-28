# -*- coding: utf-8 -*-

import jieba
import jieba.posseg as pseg
import logging

def main():

    logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

    # jieba custom setting.
    jieba.set_dictionary('jieba_dict/dict.txt.big')

    # load stopwords set
    stopword_set = set()
    with open('jieba_dict/stopwords.txt','r', encoding='utf-8') as stopwords:
        for stopword in stopwords:
            stopword_set.add(stopword.strip('\n'))

    output = open('SubTag.txt', 'w', encoding='utf-8')
    with open('CNSubNoSpace.txt', 'r', encoding='utf-8') as content :
        for texts_num, line in enumerate(content):
            line = line.strip('\n')
            words = pseg.cut(line)
            for word in words:
                if word not in stopword_set:
                    output.write(word.word + ','+ word.flag)
            output.write('\n')

            if (texts_num + 1) % 10000 == 0:
                logging.info("已完成前 %d 行的斷詞" % (texts_num + 1))
    output.close()

if __name__ == '__main__':
    main()
