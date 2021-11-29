import os
import logging
import json
from pathlib import Path
import azure.functions as func

script_dir = os.path.dirname(__file__)

with open(os.path.join(script_dir, "answers.json")) as answer_file:
    ans_config = json.load(answer_file)

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        req_body = req.get_json()
    except ValueError:
        pass

    logging.info(f"{req_body}")

    day = req_body.get("day", 0)

    true_ans = ans_config.get(day, 0)

    attempt = req_body.get("answer")

    logging.info(f"True answer is {true_ans}")

    if not attempt:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            attempt = req_body.get("answer")

    logging.info(f"Attempt answer is {attempt}")

    if attempt:
        if attempt == true_ans:
            return func.HttpResponse(f"Your answer: {attempt} is correct! Give yourself a pat on the back! \n Why not share your solution by submitting a pull request to our GitHub <insert_link_here>")
        
        else:
            return func.HttpResponse(f"Your answer {attempt} is incorrect. Don't worry why not try it again!")
    
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
