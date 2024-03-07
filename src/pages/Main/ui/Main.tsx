import type React from 'react';
import { LayoutContainerCentered } from '@shared/ui/LayoutContainer';
import Layout from '@pages/Layout';
import { ControlGroup } from '@shared/ui/Control';
import { ComponentProps, memo, useState } from 'react';
import QuizWidget from '@widgets/quiz';

const Main: React.FC = () => {
    const [answer, setAnswer] = useState<ComponentProps<typeof ControlGroup>['value']>();

    const controlGroupOptions: ComponentProps<typeof ControlGroup>['options'] = [
        'Green',
        'Orange',
        'Red'
    ].map((value) => ({ value: value.toLowerCase(), label: value }));

    return (
        <Layout>
            <LayoutContainerCentered>
                <QuizWidget.Question.Stack>
                    <QuizWidget.Question.Card
                        question={{
                            title: `Theme`,
                            description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. \n Answer: ${answer}`
                        }}
                        answer={{
                            options: controlGroupOptions,
                            multiple: true
                        }}
                        onAnswerChange={(answer) => setAnswer(answer)}
                    />
                </QuizWidget.Question.Stack>
            </LayoutContainerCentered>
        </Layout>
    );
};

export default memo(Main);
