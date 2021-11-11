class InspirationalQuotesController < ApplicationController
  before_action :set_inspirational_quote, only: [:show, :update, :destroy]

  # GET /inspirational_quotes
  def index
    @inspirational_quotes = InspirationalQuote.all

    render json: @inspirational_quotes
  end

  # GET /inspirational_quotes/1
  def show
    render json: @inspirational_quote
  end

  # POST /inspirational_quotes
  def create
    @inspirational_quote = InspirationalQuote.new(inspirational_quote_params)

    if @inspirational_quote.save
      render json: @inspirational_quote, status: :created, location: @inspirational_quote
    else
      render json: @inspirational_quote.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inspirational_quotes/1
  def update
    if @inspirational_quote.update(inspirational_quote_params)
      render json: @inspirational_quote
    else
      render json: @inspirational_quote.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inspirational_quotes/1
  def destroy
    @inspirational_quote.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inspirational_quote
      @inspirational_quote = InspirationalQuote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def inspirational_quote_params
      params.require(:inspirational_quote).permit(:quote, :author, :meaning, :date)
    end
end
